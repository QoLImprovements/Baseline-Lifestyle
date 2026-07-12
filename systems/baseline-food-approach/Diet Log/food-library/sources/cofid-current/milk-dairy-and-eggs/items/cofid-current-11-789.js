/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "18 samples, 10 products, Quaker and other/own brands",
  "id": "cofid-current-11-789",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Porridge oats, unfortified, cooked, made up with semi-skimmed milk",
  "nutritionPerBasis": {
    "calcium_mg": 117.0,
    "carbs_g": 12.1,
    "energy_kcal": 84.0,
    "fat_g": 2.3,
    "fibre_g": 1.0,
    "folate_ug": 10.0,
    "iron_mg": 0.59,
    "magnesium_mg": 28.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 145.0,
    "potassium_mg": 202.0,
    "protein_g": 4.6,
    "salt_g": 0.0975,
    "sat_fat_g": 1.03,
    "sodium_mg": 39.0,
    "sugar_g": 4.1,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-789",
  "state": "Cooked",
  "subcategory": "A",
  "tags": [
    "a",
    "cooked",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
