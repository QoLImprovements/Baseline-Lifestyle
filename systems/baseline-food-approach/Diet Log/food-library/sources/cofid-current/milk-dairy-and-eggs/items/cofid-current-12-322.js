/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "3 samples",
  "id": "cofid-current-12-322",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Milk, Channel islands, whole, summer",
  "nutritionPerBasis": {
    "calcium_mg": 129.0,
    "carbs_g": 4.1,
    "energy_kcal": 73.0,
    "fat_g": 4.7,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.0,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 106.0,
    "potassium_mg": 131.0,
    "protein_g": 3.9,
    "salt_g": 0.0975,
    "sat_fat_g": 2.99,
    "sodium_mg": 39.0,
    "sugar_g": 4.1,
    "vitamin_a_ug": 84.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-322",
  "state": "Unspecified",
  "subcategory": "BAB",
  "tags": [
    "bab",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
