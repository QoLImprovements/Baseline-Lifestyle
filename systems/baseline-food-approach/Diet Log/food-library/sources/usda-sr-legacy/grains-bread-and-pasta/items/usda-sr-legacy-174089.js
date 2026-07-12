/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "roll",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174089",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 51.0,
      "key": "roll",
      "kind": "unit",
      "label": "roll"
    }
  ],
  "name": "Rolls, hamburger or hot dog, wheat/cracked wheat",
  "nutritionPerBasis": {
    "calcium_mg": 196.0,
    "carbs_g": 47.3,
    "energy_kcal": 269.0,
    "fat_g": 3.61,
    "fibre_g": 4.2,
    "folate_ug": 84.0,
    "iron_mg": 2.92,
    "magnesium_mg": 47.0,
    "omega3_g": 0.179,
    "phosphorus_mg": 154.0,
    "potassium_mg": 181.0,
    "protein_g": 11.7,
    "salt_g": 1.1575,
    "sat_fat_g": 0.746,
    "sodium_mg": 463.0,
    "sugar_g": 6.9,
    "vitamin_a_ug": 27.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 6.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174089",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
