/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-174627",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cereals, QUAKER, Oat Bran, QUAKER/MOTHER'S Oat Bran, prepared with water, no salt",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 7.49,
    "energy_kcal": 180.0,
    "fat_g": 0.95,
    "fibre_g": 1.7,
    "folate_ug": 5.0,
    "iron_mg": 0.97,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 83.0,
    "potassium_mg": 69.0,
    "protein_g": 2.03,
    "salt_g": 0.0075,
    "sat_fat_g": 0.17,
    "sodium_mg": 3.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174627",
  "state": "Unspecified",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
