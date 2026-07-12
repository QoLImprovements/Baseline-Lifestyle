/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Fried rice and lo/chow mein",
  "id": "usda-fndds-2706771",
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
  "name": "Pork chow mein or chop suey, no noodles",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 3.85,
    "energy_kcal": 98.0,
    "fat_g": 4.3,
    "fibre_g": 0.8,
    "folate_ug": 27.0,
    "iron_mg": 0.64,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 102.0,
    "potassium_mg": 231.0,
    "protein_g": 10.3,
    "salt_g": 0.625,
    "sat_fat_g": 1.35,
    "sodium_mg": 250.0,
    "sugar_g": 1.76,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 12.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706771",
  "state": "Unspecified",
  "subcategory": "Fried rice and lo/chow mein",
  "tags": [
    "fried-rice-and-lo-chow-mein",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
