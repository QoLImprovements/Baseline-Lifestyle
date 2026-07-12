/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "serving",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-167680",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 554.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Restaurant, Italian, spaghetti with meat sauce",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 16.4,
    "energy_kcal": 121.0,
    "fat_g": 3.59,
    "fibre_g": 1.6,
    "folate_ug": 30.0,
    "iron_mg": 0.97,
    "magnesium_mg": 17.0,
    "omega3_g": 0.039,
    "phosphorus_mg": 59.0,
    "potassium_mg": 172.0,
    "protein_g": 5.79,
    "salt_g": 0.575,
    "sat_fat_g": 1.06,
    "sodium_mg": 230.0,
    "sugar_g": 1.82,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.63,
    "vitamin_k_ug": 4.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167680",
  "state": "Unspecified",
  "subcategory": "Restaurant Foods",
  "tags": [
    "meat-and-poultry",
    "restaurant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
