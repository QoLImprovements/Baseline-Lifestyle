/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "5 samples, including Elmlea",
  "id": "cofid-current-12-544",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cream substitute, single",
  "nutritionPerBasis": {
    "calcium_mg": 96.0,
    "carbs_g": 4.0,
    "energy_kcal": 158.0,
    "fat_g": 14.5,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.12,
    "magnesium_mg": 10.0,
    "omega3_g": 0.36,
    "phosphorus_mg": 88.0,
    "potassium_mg": 139.0,
    "protein_g": 3.1,
    "salt_g": 0.1525,
    "sat_fat_g": 9.19,
    "sodium_mg": 61.0,
    "sugar_g": 4.0,
    "vitamin_a_ug": 39.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.84,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-544",
  "state": "Unspecified",
  "subcategory": "BJS",
  "tags": [
    "bjs",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
