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
  "id": "usda-sr-legacy-169033",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 510.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Restaurant, Italian, spaghetti with pomodoro sauce (no meat)",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 17.8,
    "energy_kcal": 104.0,
    "fat_g": 1.89,
    "fibre_g": 1.7,
    "folate_ug": 29.0,
    "iron_mg": 0.9,
    "magnesium_mg": 16.0,
    "omega3_g": 0.076,
    "phosphorus_mg": 44.0,
    "potassium_mg": 140.0,
    "protein_g": 3.9,
    "salt_g": 0.4775,
    "sat_fat_g": 0.366,
    "sodium_mg": 191.0,
    "sugar_g": 1.82,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 0.81,
    "vitamin_k_ug": 4.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169033",
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
