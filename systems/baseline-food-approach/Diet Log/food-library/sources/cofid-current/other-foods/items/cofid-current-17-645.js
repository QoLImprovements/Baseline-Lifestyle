/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "6 samples, 4 products, including Wotsits, Monster Munch and own label",
  "id": "cofid-current-17-645",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Corn snacks",
  "nutritionPerBasis": {
    "calcium_mg": 71.0,
    "carbs_g": 60.8,
    "energy_kcal": 526.0,
    "fat_g": 30.4,
    "fibre_g": 1.3,
    "folate_ug": 5.0,
    "iron_mg": 0.3,
    "magnesium_mg": 20.0,
    "omega3_g": 2.21,
    "phosphorus_mg": 96.0,
    "potassium_mg": 329.0,
    "protein_g": 6.0,
    "salt_g": 2.2725,
    "sat_fat_g": 2.76,
    "sodium_mg": 909.0,
    "sugar_g": 5.5,
    "vitamin_a_ug": 39.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 8.43,
    "vitamin_k_ug": 15.5
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-645",
  "state": "Unspecified",
  "subcategory": "SN",
  "tags": [
    "other-foods",
    "sn",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
