/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10 samples, 9 products, including tortellini and ravioli",
  "id": "cofid-current-11-731",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pasta, egg, fresh, filled with green vegetables/herbs and cheese, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 110.0,
    "carbs_g": 28.7,
    "energy_kcal": 195.0,
    "fat_g": 5.8,
    "fibre_g": 1.6,
    "folate_ug": 12.0,
    "iron_mg": 0.77,
    "magnesium_mg": 21.0,
    "omega3_g": 0.06,
    "phosphorus_mg": 122.0,
    "potassium_mg": 99.0,
    "protein_g": 8.7,
    "salt_g": 0.5975,
    "sat_fat_g": 3.22,
    "sodium_mg": 239.0,
    "sugar_g": 0.1,
    "vitamin_a_ug": 79.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.03,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-731",
  "state": "Boiled",
  "subcategory": "AD",
  "tags": [
    "ad",
    "boiled",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
