/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "11 samples, 6 brands, including strawberry, raspberry, apricot and blackcherry flavour",
  "id": "cofid-current-12-372",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Fromage frais, virtually fat free, fruit",
  "nutritionPerBasis": {
    "calcium_mg": 87.0,
    "carbs_g": 5.6,
    "energy_kcal": 50.0,
    "fat_g": 0.2,
    "fibre_g": 0.7,
    "folate_ug": 15.0,
    "iron_mg": 0.1,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 110.0,
    "potassium_mg": 110.0,
    "protein_g": 6.8,
    "salt_g": 0.0825,
    "sat_fat_g": 0.1,
    "sodium_mg": 33.0,
    "sugar_g": 4.9,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-372",
  "state": "Unspecified",
  "subcategory": "BN",
  "tags": [
    "bn",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
