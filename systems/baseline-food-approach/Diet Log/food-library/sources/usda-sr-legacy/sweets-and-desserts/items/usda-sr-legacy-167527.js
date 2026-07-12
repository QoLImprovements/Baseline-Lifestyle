/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving",
  "description": "Baked Products",
  "id": "usda-sr-legacy-167527",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    },
    {
      "gramsPerUnit": 622.0,
      "key": "cake-square",
      "kind": "unit",
      "label": "cake square"
    }
  ],
  "name": "Bread, pound cake type, pan de torta salvadoran",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 51.3,
    "energy_kcal": 1630.0,
    "fat_g": 17.4,
    "fibre_g": 1.7,
    "folate_ug": 0.0,
    "iron_mg": 2.2,
    "magnesium_mg": 19.0,
    "omega3_g": 1.169,
    "phosphorus_mg": 300.0,
    "potassium_mg": 210.0,
    "protein_g": 7.06,
    "salt_g": 0.975,
    "sat_fat_g": 3.04,
    "sodium_mg": 390.0,
    "sugar_g": 18.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.42,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167527",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
