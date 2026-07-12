/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Main ribs and stems removed",
  "id": "cofid-current-13-348",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Spring greens, raw",
  "nutritionPerBasis": {
    "calcium_mg": 210.0,
    "carbs_g": 3.1,
    "energy_kcal": 33.0,
    "fat_g": 1.0,
    "fibre_g": 0.0,
    "folate_ug": 92.0,
    "iron_mg": 3.0,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 91.0,
    "potassium_mg": 370.0,
    "protein_g": 3.0,
    "salt_g": 0.05,
    "sat_fat_g": 0.1,
    "sodium_mg": 20.0,
    "sugar_g": 2.7,
    "vitamin_a_ug": 438.0,
    "vitamin_c_mg": 180.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-348",
  "state": "Raw",
  "subcategory": "DG",
  "tags": [
    "dg",
    "raw",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
