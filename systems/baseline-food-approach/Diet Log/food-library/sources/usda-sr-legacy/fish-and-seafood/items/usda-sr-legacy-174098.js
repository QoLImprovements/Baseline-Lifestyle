/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "10-goldfish",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174098",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.2,
      "key": "10-goldfish",
      "kind": "unit",
      "label": "10 goldfish"
    }
  ],
  "name": "Crackers, flavored, fish-shaped",
  "nutritionPerBasis": {
    "calcium_mg": 83.0,
    "carbs_g": 65.7,
    "energy_kcal": 463.0,
    "fat_g": 17.7,
    "fibre_g": 3.1,
    "folate_ug": 153.0,
    "iron_mg": 4.58,
    "magnesium_mg": 25.0,
    "omega3_g": 0.404,
    "phosphorus_mg": 167.0,
    "potassium_mg": 224.0,
    "protein_g": 10.2,
    "salt_g": 2.425,
    "sat_fat_g": 2.06,
    "sodium_mg": 970.0,
    "sugar_g": 1.18,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.68,
    "vitamin_k_ug": 27.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174098",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "fish-and-seafood",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
