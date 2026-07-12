/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "package",
  "description": "Sweets",
  "id": "usda-sr-legacy-169625",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 388.0,
      "key": "package",
      "kind": "unit",
      "label": "package"
    }
  ],
  "name": "Frostings, chocolate, creamy, dry mix",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 92.0,
    "energy_kcal": 1630.0,
    "fat_g": 5.2,
    "fibre_g": 2.4,
    "folate_ug": 3.0,
    "iron_mg": 1.19,
    "magnesium_mg": 38.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 62.0,
    "potassium_mg": 180.0,
    "protein_g": 1.3,
    "salt_g": 0.19,
    "sat_fat_g": 0.0,
    "sodium_mg": 76.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169625",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "sweets",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
