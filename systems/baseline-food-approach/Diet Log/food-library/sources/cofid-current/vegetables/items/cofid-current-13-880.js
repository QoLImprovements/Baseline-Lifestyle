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
  "id": "cofid-current-13-880",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pepper, black",
  "nutritionPerBasis": {
    "calcium_mg": 443.0,
    "carbs_g": 0.0,
    "energy_kcal": 0.0,
    "fat_g": 3.3,
    "fibre_g": 25.3,
    "folate_ug": 17.0,
    "iron_mg": 9.71,
    "magnesium_mg": 171.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 158.0,
    "potassium_mg": 1329.0,
    "protein_g": 10.4,
    "salt_g": 0.05,
    "sat_fat_g": 1.39,
    "sodium_mg": 20.0,
    "sugar_g": 0.6,
    "vitamin_a_ug": 55.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 163.7
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-880",
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
