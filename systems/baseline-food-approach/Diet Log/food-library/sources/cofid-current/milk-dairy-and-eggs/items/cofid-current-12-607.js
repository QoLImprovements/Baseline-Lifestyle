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
  "id": "cofid-current-12-607",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pudding, rice, homemade, with skimmed milk",
  "nutritionPerBasis": {
    "calcium_mg": 133.0,
    "carbs_g": 19.1,
    "energy_kcal": 114.0,
    "fat_g": 2.9,
    "fibre_g": 0.1,
    "folate_ug": 5.0,
    "iron_mg": 0.06,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 113.0,
    "potassium_mg": 180.0,
    "protein_g": 4.3,
    "salt_g": 0.1625,
    "sat_fat_g": 1.8,
    "sodium_mg": 65.0,
    "sugar_g": 10.4,
    "vitamin_a_ug": 33.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-607",
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
