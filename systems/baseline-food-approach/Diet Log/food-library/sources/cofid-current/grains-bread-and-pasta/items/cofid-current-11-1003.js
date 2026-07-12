/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "Including Hovis Best of Both, Kingsmill 50/50 and Warburtons Half & Half Toastie",
  "id": "cofid-current-11-1003",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bread, white, 'with added fibre'",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 45.1,
    "energy_kcal": 224.0,
    "fat_g": 2.2,
    "fibre_g": 4.8,
    "folate_ug": 33.0,
    "iron_mg": 2.0,
    "magnesium_mg": 45.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 149.0,
    "potassium_mg": 195.0,
    "protein_g": 8.7,
    "salt_g": 0.925,
    "sat_fat_g": 0.42,
    "sodium_mg": 370.0,
    "sugar_g": 3.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1003",
  "state": "Unspecified",
  "subcategory": "AF",
  "tags": [
    "af",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
