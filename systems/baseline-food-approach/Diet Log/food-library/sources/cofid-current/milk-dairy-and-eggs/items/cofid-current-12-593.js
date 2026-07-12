/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10 samples, 4 brands",
  "id": "cofid-current-12-593",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sauce, cheese, packet mix, dry",
  "nutritionPerBasis": {
    "calcium_mg": 430.0,
    "carbs_g": 40.9,
    "energy_kcal": 486.0,
    "fat_g": 28.4,
    "fibre_g": 1.7,
    "folate_ug": 46.0,
    "iron_mg": 0.8,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 730.0,
    "potassium_mg": 330.0,
    "protein_g": 19.3,
    "salt_g": 6.75,
    "sat_fat_g": 17.6,
    "sodium_mg": 2700.0,
    "sugar_g": 5.6,
    "vitamin_a_ug": 165.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-593",
  "state": "Unspecified",
  "subcategory": "BV",
  "tags": [
    "bv",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
