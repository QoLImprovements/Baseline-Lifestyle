/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Literature sources",
  "id": "cofid-current-13-810",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Celery seeds",
  "nutritionPerBasis": {
    "calcium_mg": 1770.0,
    "carbs_g": 0.0,
    "energy_kcal": 0.0,
    "fat_g": 25.3,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 44.9,
    "magnesium_mg": 440.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 550.0,
    "potassium_mg": 1400.0,
    "protein_g": 18.1,
    "salt_g": 0.4,
    "sat_fat_g": 2.2,
    "sodium_mg": 160.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-810",
  "state": "Unspecified",
  "subcategory": "H",
  "tags": [
    "h",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
