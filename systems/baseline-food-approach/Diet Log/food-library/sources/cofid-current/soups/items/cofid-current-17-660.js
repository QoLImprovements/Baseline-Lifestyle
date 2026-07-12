/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "g",
  "description": "Calculated from instant soup powder, 24g powder made up with 225g water. Assorted flavours",
  "id": "cofid-current-17-660",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Soup, instant, dried, as served",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 6.2,
    "energy_kcal": 37.0,
    "fat_g": 1.3,
    "fibre_g": 0.5,
    "folate_ug": 1.0,
    "iron_mg": 0.12,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 20.0,
    "potassium_mg": 75.0,
    "protein_g": 0.6,
    "salt_g": 0.5725,
    "sat_fat_g": 0.84,
    "sodium_mg": 229.0,
    "sugar_g": 1.7,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 0.72
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-660",
  "state": "Dried",
  "subcategory": "WAE",
  "tags": [
    "dried",
    "soups",
    "wae"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
