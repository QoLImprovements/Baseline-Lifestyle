/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-cup",
  "description": "Fried rice and lo/chow mein",
  "id": "usda-fndds-2706827",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 220.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Shrimp chow mein or chop suey, no noodles",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 4.27,
    "energy_kcal": 69.0,
    "fat_g": 1.69,
    "fibre_g": 0.8,
    "folate_ug": 34.0,
    "iron_mg": 0.38,
    "magnesium_mg": 19.0,
    "omega3_g": 0.1,
    "phosphorus_mg": 126.0,
    "potassium_mg": 148.0,
    "protein_g": 8.8,
    "salt_g": 0.6575,
    "sat_fat_g": 0.372,
    "sodium_mg": 263.0,
    "sugar_g": 1.72,
    "vitamin_a_ug": 40.0,
    "vitamin_c_mg": 4.7,
    "vitamin_e_mg": 1.09,
    "vitamin_k_ug": 12.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706827",
  "state": "Unspecified",
  "subcategory": "Fried rice and lo/chow mein",
  "tags": [
    "fish-and-seafood",
    "fried-rice-and-lo-chow-mein",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
