/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 8 products",
  "id": "cofid-current-11-798",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Biscuits, ginger nuts",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 75.3,
    "energy_kcal": 443.0,
    "fat_g": 15.7,
    "fibre_g": 2.2,
    "folate_ug": 11.0,
    "iron_mg": 1.5,
    "magnesium_mg": 18.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 68.0,
    "potassium_mg": 154.0,
    "protein_g": 4.8,
    "salt_g": 1.0725,
    "sat_fat_g": 7.26,
    "sodium_mg": 429.0,
    "sugar_g": 31.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.1,
    "vitamin_k_ug": 1.6
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-798",
  "state": "Unspecified",
  "subcategory": "AM",
  "tags": [
    "am",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
