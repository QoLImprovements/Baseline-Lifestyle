/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "cracker",
  "description": "Baked Products",
  "id": "usda-sr-legacy-175056",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "cracker",
      "kind": "unit",
      "label": "cracker"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "cracker-round-large",
      "kind": "unit",
      "label": "cracker, round large"
    },
    {
      "gramsPerUnit": 6.0,
      "key": "cracker-rectangle",
      "kind": "unit",
      "label": "cracker, rectangle"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "cup-oyster-crackers",
      "kind": "unit",
      "label": "cup oyster crackers"
    },
    {
      "gramsPerUnit": 1.0,
      "key": "cracker-oyster",
      "kind": "unit",
      "label": "cracker, oyster"
    },
    {
      "gramsPerUnit": 14.2,
      "key": "0-5-oz",
      "kind": "unit",
      "label": "0.5 oz"
    }
  ],
  "name": "Crackers, saltines, low salt (includes oyster, soda, soup)",
  "nutritionPerBasis": {
    "calcium_mg": 119.0,
    "carbs_g": 74.3,
    "energy_kcal": 1760.0,
    "fat_g": 8.85,
    "fibre_g": 2.9,
    "folate_ug": 140.0,
    "iron_mg": 5.13,
    "magnesium_mg": 25.0,
    "omega3_g": 0.426,
    "phosphorus_mg": 111.0,
    "potassium_mg": 724.0,
    "protein_g": 9.5,
    "salt_g": 0.495,
    "sat_fat_g": 2.0,
    "sodium_mg": 198.0,
    "sugar_g": 2.22,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.12,
    "vitamin_k_ug": 15.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175056",
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
