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
  "id": "usda-fndds-2706798",
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
  "name": "Chicken or turkey chow mein or chop suey, no noodles",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 3.84,
    "energy_kcal": 83.0,
    "fat_g": 3.23,
    "fibre_g": 0.8,
    "folate_ug": 30.0,
    "iron_mg": 0.52,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 99.0,
    "potassium_mg": 183.0,
    "protein_g": 9.78,
    "salt_g": 0.86,
    "sat_fat_g": 0.719,
    "sodium_mg": 344.0,
    "sugar_g": 1.76,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 4.8,
    "vitamin_e_mg": 0.47,
    "vitamin_k_ug": 12.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706798",
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
