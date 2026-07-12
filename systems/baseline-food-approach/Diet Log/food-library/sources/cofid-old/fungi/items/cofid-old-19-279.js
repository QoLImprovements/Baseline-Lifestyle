/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fungi",
  "defaultMeasure": "g",
  "description": "11 samples, 9 brands. 10-14% meat, chilled/frozen/longlife",
  "id": "cofid-old-19-279",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Tagliatelle with ham, mushroom and cheese, retail, reheated",
  "nutritionPerBasis": {
    "calcium_mg": 69.0,
    "carbs_g": 14.1,
    "energy_kcal": 139.0,
    "fat_g": 7.1,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.5,
    "magnesium_mg": 14.0,
    "omega3_g": 0.08,
    "phosphorus_mg": 110.0,
    "potassium_mg": 110.0,
    "protein_g": 5.6,
    "salt_g": 0.85,
    "sat_fat_g": 2.7,
    "sodium_mg": 340.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.43,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "19-279",
  "state": "Unspecified",
  "subcategory": "MR",
  "tags": [
    "fungi",
    "mr",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
