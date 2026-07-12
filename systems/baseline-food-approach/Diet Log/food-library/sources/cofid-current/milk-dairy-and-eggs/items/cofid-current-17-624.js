/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10 samples, 8 products, chilled and ambient",
  "id": "cofid-current-17-624",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sauce, pasta, four cheese",
  "nutritionPerBasis": {
    "calcium_mg": 169.0,
    "carbs_g": 5.8,
    "energy_kcal": 129.0,
    "fat_g": 9.7,
    "fibre_g": 1.3,
    "folate_ug": 6.0,
    "iron_mg": 0.13,
    "magnesium_mg": 10.0,
    "omega3_g": 0.14,
    "phosphorus_mg": 149.0,
    "potassium_mg": 70.0,
    "protein_g": 5.1,
    "salt_g": 0.8125,
    "sat_fat_g": 5.73,
    "sodium_mg": 325.0,
    "sugar_g": 1.9,
    "vitamin_a_ug": 95.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.55,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-624",
  "state": "Unspecified",
  "subcategory": "WC",
  "tags": [
    "milk-dairy-and-eggs",
    "unspecified",
    "wc"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
