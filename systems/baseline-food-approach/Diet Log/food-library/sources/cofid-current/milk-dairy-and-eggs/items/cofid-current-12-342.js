/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "4 samples, including Elmlea",
  "id": "cofid-current-12-342",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cream substitute, double",
  "nutritionPerBasis": {
    "calcium_mg": 79.0,
    "carbs_g": 3.6,
    "energy_kcal": 345.0,
    "fat_g": 35.7,
    "fibre_g": 0.2,
    "folate_ug": 0.0,
    "iron_mg": 0.22,
    "magnesium_mg": 8.0,
    "omega3_g": 0.79,
    "phosphorus_mg": 73.0,
    "potassium_mg": 109.0,
    "protein_g": 2.6,
    "salt_g": 0.1175,
    "sat_fat_g": 24.34,
    "sodium_mg": 47.0,
    "sugar_g": 3.6,
    "vitamin_a_ug": 71.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.33,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-342",
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
