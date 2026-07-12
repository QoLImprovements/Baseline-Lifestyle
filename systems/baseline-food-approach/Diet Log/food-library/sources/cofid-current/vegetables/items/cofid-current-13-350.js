/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Based on boiled in salted water",
  "id": "cofid-current-13-350",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Spring greens, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 75.0,
    "carbs_g": 1.6,
    "energy_kcal": 20.0,
    "fat_g": 0.7,
    "fibre_g": 0.0,
    "folate_ug": 66.0,
    "iron_mg": 1.4,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 29.0,
    "potassium_mg": 160.0,
    "protein_g": 1.9,
    "salt_g": 0.025,
    "sat_fat_g": 0.1,
    "sodium_mg": 10.0,
    "sugar_g": 1.4,
    "vitamin_a_ug": 378.0,
    "vitamin_c_mg": 77.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 893.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-350",
  "state": "Boiled",
  "subcategory": "DG",
  "tags": [
    "boiled",
    "dg",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
