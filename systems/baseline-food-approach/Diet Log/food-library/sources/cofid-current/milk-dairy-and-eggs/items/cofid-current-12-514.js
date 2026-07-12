/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-12-514",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pudding, rice, homemade, with semi-skimmed milk",
  "nutritionPerBasis": {
    "calcium_mg": 128.0,
    "carbs_g": 19.0,
    "energy_kcal": 127.0,
    "fat_g": 4.4,
    "fibre_g": 0.1,
    "folate_ug": 5.0,
    "iron_mg": 0.05,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 111.0,
    "potassium_mg": 175.0,
    "protein_g": 4.2,
    "salt_g": 0.1675,
    "sat_fat_g": 2.79,
    "sodium_mg": 67.0,
    "sugar_g": 10.3,
    "vitamin_a_ug": 53.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-514",
  "state": "Unspecified",
  "subcategory": "BR",
  "tags": [
    "br",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
