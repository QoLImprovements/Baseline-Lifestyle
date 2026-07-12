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
  "id": "cofid-current-12-569",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Complan powder, sweet, made up with skimmed milk",
  "nutritionPerBasis": {
    "calcium_mg": 216.0,
    "carbs_g": 17.9,
    "energy_kcal": 122.0,
    "fat_g": 3.4,
    "fibre_g": 0.0,
    "folate_ug": 46.0,
    "iron_mg": 1.64,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 171.0,
    "potassium_mg": 271.0,
    "protein_g": 6.1,
    "salt_g": 0.19,
    "sat_fat_g": 1.52,
    "sodium_mg": 76.0,
    "sugar_g": 13.1,
    "vitamin_a_ug": 97.0,
    "vitamin_c_mg": 16.0,
    "vitamin_e_mg": 2.41,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-569",
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
