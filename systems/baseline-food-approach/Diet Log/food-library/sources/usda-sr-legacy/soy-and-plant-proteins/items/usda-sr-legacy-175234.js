/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soy & Plant Proteins",
  "defaultMeasure": "3-oz",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-175234",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Vitasoy USA Organic Nasoya Sprouted, Tofu Plus Super Firm",
  "nutritionPerBasis": {
    "calcium_mg": 239.0,
    "carbs_g": 2.16,
    "energy_kcal": 115.0,
    "fat_g": 5.9,
    "fibre_g": 1.2,
    "folate_ug": 0.0,
    "iron_mg": 1.7,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 13.2,
    "salt_g": 0.07,
    "sat_fat_g": 1.1,
    "sodium_mg": 28.0,
    "sugar_g": 1.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 14.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175234",
  "state": "Unspecified",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "legumes-and-legume-products",
    "soy-and-plant-proteins",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
