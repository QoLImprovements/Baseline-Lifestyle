/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "unit",
  "description": "Sweets",
  "id": "usda-sr-legacy-167585",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "unit",
      "kind": "unit",
      "label": "unit"
    },
    {
      "gramsPerUnit": 68.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Ice creams, chocolate, light",
  "nutritionPerBasis": {
    "calcium_mg": 159.0,
    "carbs_g": 25.7,
    "energy_kcal": 784.0,
    "fat_g": 7.19,
    "fibre_g": 0.8,
    "folate_ug": 4.0,
    "iron_mg": 0.69,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 83.0,
    "potassium_mg": 170.0,
    "protein_g": 5.0,
    "salt_g": 0.1775,
    "sat_fat_g": 4.38,
    "sodium_mg": 71.0,
    "sugar_g": 24.7,
    "vitamin_a_ug": 71.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167585",
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
