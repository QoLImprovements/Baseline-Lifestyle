/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "22 samples, average of winter and summer",
  "id": "cofid-current-12-314",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Milk, semi-skimmed, UHT",
  "nutritionPerBasis": {
    "calcium_mg": 110.0,
    "carbs_g": 4.9,
    "energy_kcal": 46.0,
    "fat_g": 1.6,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.17,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 90.0,
    "potassium_mg": 150.0,
    "protein_g": 3.3,
    "salt_g": 0.125,
    "sat_fat_g": 1.1,
    "sodium_mg": 50.0,
    "sugar_g": 4.9,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-314",
  "state": "Unspecified",
  "subcategory": "BAH",
  "tags": [
    "bah",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
