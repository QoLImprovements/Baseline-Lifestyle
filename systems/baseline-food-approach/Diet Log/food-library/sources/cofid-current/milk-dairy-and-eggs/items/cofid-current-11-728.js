/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10 samples, 5 products, including tortelloni, torellini and ravioli",
  "id": "cofid-current-11-728",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pasta, egg, fresh, filled with cheese only, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 124.0,
    "carbs_g": 30.2,
    "energy_kcal": 216.0,
    "fat_g": 6.7,
    "fibre_g": 2.2,
    "folate_ug": 10.0,
    "iron_mg": 0.74,
    "magnesium_mg": 21.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 147.0,
    "potassium_mg": 99.0,
    "protein_g": 10.5,
    "salt_g": 0.605,
    "sat_fat_g": 3.54,
    "sodium_mg": 242.0,
    "sugar_g": 2.2,
    "vitamin_a_ug": 81.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.91,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-728",
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
