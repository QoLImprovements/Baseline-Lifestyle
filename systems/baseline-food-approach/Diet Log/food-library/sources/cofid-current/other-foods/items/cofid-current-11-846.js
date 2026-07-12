/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 6 products",
  "id": "cofid-current-11-846",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Jam tarts, retail",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 58.2,
    "energy_kcal": 353.0,
    "fat_g": 13.5,
    "fibre_g": 1.4,
    "folate_ug": 5.0,
    "iron_mg": 0.27,
    "magnesium_mg": 6.0,
    "omega3_g": 0.25,
    "phosphorus_mg": 27.0,
    "potassium_mg": 68.0,
    "protein_g": 3.2,
    "salt_g": 0.065,
    "sat_fat_g": 5.54,
    "sodium_mg": 26.0,
    "sugar_g": 32.1,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.32,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-846",
  "state": "Unspecified",
  "subcategory": "AS",
  "tags": [
    "as",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
