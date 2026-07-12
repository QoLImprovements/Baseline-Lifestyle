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
  "id": "cofid-current-19-636",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Toad in the hole, made with skimmed milk and reduced fat sausages, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 126.0,
    "carbs_g": 19.7,
    "energy_kcal": 175.0,
    "fat_g": 5.2,
    "fibre_g": 2.1,
    "folate_ug": 9.0,
    "iron_mg": 1.21,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 195.0,
    "potassium_mg": 221.0,
    "protein_g": 13.6,
    "salt_g": 0.8825,
    "sat_fat_g": 1.82,
    "sodium_mg": 353.0,
    "sugar_g": 3.8,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.36,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-636",
  "state": "Unspecified",
  "subcategory": "MR",
  "tags": [
    "milk-dairy-and-eggs",
    "mr",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
