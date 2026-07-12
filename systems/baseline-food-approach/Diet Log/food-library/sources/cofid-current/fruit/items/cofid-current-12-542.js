/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "8 samples, 3 brands including strawberry, apricot, blackcurrant and cherry",
  "id": "cofid-current-12-542",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheesecake, fruit, individual",
  "nutritionPerBasis": {
    "calcium_mg": 78.0,
    "carbs_g": 34.5,
    "energy_kcal": 264.0,
    "fat_g": 12.3,
    "fibre_g": 1.6,
    "folate_ug": 7.0,
    "iron_mg": 0.4,
    "magnesium_mg": 13.0,
    "omega3_g": 0.09,
    "phosphorus_mg": 100.0,
    "potassium_mg": 165.0,
    "protein_g": 6.1,
    "salt_g": 0.225,
    "sat_fat_g": 7.54,
    "sodium_mg": 90.0,
    "sugar_g": 25.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.29,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-542",
  "state": "Unspecified",
  "subcategory": "BR",
  "tags": [
    "br",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
