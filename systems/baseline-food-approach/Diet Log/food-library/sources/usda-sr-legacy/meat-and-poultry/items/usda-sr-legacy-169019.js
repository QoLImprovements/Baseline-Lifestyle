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
  "id": "usda-sr-legacy-169019",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 225.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "T.G.I. FRIDAY'S, chicken fingers",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 16.8,
    "energy_kcal": 1360.0,
    "fat_g": 20.3,
    "fibre_g": 0.8,
    "folate_ug": 0.0,
    "iron_mg": 0.77,
    "magnesium_mg": 29.0,
    "omega3_g": 1.1,
    "phosphorus_mg": 350.0,
    "potassium_mg": 308.0,
    "protein_g": 18.7,
    "salt_g": 1.9675,
    "sat_fat_g": 3.9,
    "sodium_mg": 787.0,
    "sugar_g": 0.23,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.69,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169019",
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
