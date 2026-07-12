/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Recipe. Made up according to packet directions",
  "id": "cofid-current-12-568",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Complan powder, sweet, made up with semi-skimmed milk",
  "nutritionPerBasis": {
    "calcium_mg": 212.0,
    "carbs_g": 17.8,
    "energy_kcal": 132.0,
    "fat_g": 4.5,
    "fibre_g": 0.0,
    "folate_ug": 46.0,
    "iron_mg": 1.63,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 170.0,
    "potassium_mg": 267.0,
    "protein_g": 6.1,
    "salt_g": 0.1875,
    "sat_fat_g": 2.26,
    "sodium_mg": 75.0,
    "sugar_g": 13.0,
    "vitamin_a_ug": 112.0,
    "vitamin_c_mg": 17.0,
    "vitamin_e_mg": 2.44,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-568",
  "state": "Unspecified",
  "subcategory": "BH",
  "tags": [
    "bh",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
