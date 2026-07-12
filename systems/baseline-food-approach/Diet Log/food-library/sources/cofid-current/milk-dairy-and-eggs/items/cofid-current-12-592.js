/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "17 samples, 3 brands",
  "id": "cofid-current-12-592",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cream, fresh, clotted",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 2.3,
    "energy_kcal": 586.0,
    "fat_g": 63.5,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.1,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 40.0,
    "potassium_mg": 55.0,
    "protein_g": 1.6,
    "salt_g": 0.045,
    "sat_fat_g": 39.7,
    "sodium_mg": 18.0,
    "sugar_g": 2.3,
    "vitamin_a_ug": 819.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.48,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-592",
  "state": "Unspecified",
  "subcategory": "BJC",
  "tags": [
    "bjc",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
