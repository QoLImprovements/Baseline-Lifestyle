/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "tablespoon",
  "description": "Fats and Oils",
  "id": "usda-sr-legacy-172352",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "tablespoon",
      "kind": "unit",
      "label": "tablespoon"
    }
  ],
  "name": "Margarine-like spread with yogurt, 70% fat, stick, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 0.5,
    "energy_kcal": 630.0,
    "fat_g": 70.0,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.01,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 16.0,
    "potassium_mg": 25.0,
    "protein_g": 0.3,
    "salt_g": 1.475,
    "sat_fat_g": 13.3,
    "sodium_mg": 590.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 819.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 5.0,
    "vitamin_k_ug": 93.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172352",
  "state": "Unspecified",
  "subcategory": "Fats and Oils",
  "tags": [
    "fats-and-oils",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
