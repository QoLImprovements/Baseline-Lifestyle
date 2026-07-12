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
  "id": "cofid-current-12-563",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cocoa powder, made up with semi-skimmed milk",
  "nutritionPerBasis": {
    "calcium_mg": 118.0,
    "carbs_g": 6.7,
    "energy_kcal": 58.0,
    "fat_g": 2.0,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.22,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 103.0,
    "potassium_mg": 178.0,
    "protein_g": 3.7,
    "salt_g": 0.1025,
    "sat_fat_g": 1.27,
    "sodium_mg": 41.0,
    "sugar_g": 6.5,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-563",
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
