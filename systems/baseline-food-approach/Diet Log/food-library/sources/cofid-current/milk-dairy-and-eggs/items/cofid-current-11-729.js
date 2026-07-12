/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10 samples, 7 products, including tortelloni and ravioli",
  "id": "cofid-current-11-729",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pasta, egg, fresh, filled with cheese and tomato, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 115.0,
    "carbs_g": 28.1,
    "energy_kcal": 193.0,
    "fat_g": 5.9,
    "fibre_g": 2.3,
    "folate_ug": 10.0,
    "iron_mg": 0.69,
    "magnesium_mg": 18.0,
    "omega3_g": 0.04,
    "phosphorus_mg": 126.0,
    "potassium_mg": 93.0,
    "protein_g": 8.7,
    "salt_g": 0.525,
    "sat_fat_g": 3.12,
    "sodium_mg": 210.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.91,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-729",
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
