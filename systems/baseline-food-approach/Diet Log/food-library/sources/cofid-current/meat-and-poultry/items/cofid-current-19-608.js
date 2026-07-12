/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Recipe, containing onion, stock, flour and seasoning",
  "id": "cofid-current-19-608",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Lamb, mince, stewed with onions",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 2.8,
    "energy_kcal": 129.0,
    "fat_g": 8.5,
    "fibre_g": 0.4,
    "folate_ug": 2.0,
    "iron_mg": 0.96,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 107.0,
    "potassium_mg": 188.0,
    "protein_g": 10.6,
    "salt_g": 0.7925,
    "sat_fat_g": 3.34,
    "sodium_mg": 317.0,
    "sugar_g": 0.6,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-608",
  "state": "Unspecified",
  "subcategory": "MR",
  "tags": [
    "meat-and-poultry",
    "mr",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
