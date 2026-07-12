/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "10 samples, 7 brands",
  "id": "cofid-current-12-405",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Profiteroles with sauce, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 58.0,
    "carbs_g": 24.6,
    "energy_kcal": 346.0,
    "fat_g": 25.7,
    "fibre_g": 1.4,
    "folate_ug": 9.0,
    "iron_mg": 1.52,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 114.0,
    "potassium_mg": 190.0,
    "protein_g": 5.5,
    "salt_g": 0.325,
    "sat_fat_g": 14.01,
    "sodium_mg": 130.0,
    "sugar_g": 17.0,
    "vitamin_a_ug": 129.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.18,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-405",
  "state": "Frozen",
  "subcategory": "BR",
  "tags": [
    "br",
    "condiments-and-sauces",
    "frozen"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
