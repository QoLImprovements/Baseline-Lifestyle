/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Recipe. Calculated from 4g powder, 4g sugar and 200ml milk",
  "id": "cofid-current-12-564",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cocoa powder, made up with skimmed milk",
  "nutritionPerBasis": {
    "calcium_mg": 123.0,
    "carbs_g": 6.7,
    "energy_kcal": 46.0,
    "fat_g": 0.6,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.22,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 105.0,
    "potassium_mg": 183.0,
    "protein_g": 3.7,
    "salt_g": 0.105,
    "sat_fat_g": 0.36,
    "sodium_mg": 42.0,
    "sugar_g": 6.5,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-564",
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
