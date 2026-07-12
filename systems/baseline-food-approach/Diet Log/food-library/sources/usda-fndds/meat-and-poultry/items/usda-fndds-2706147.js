/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup-diced-cooked",
  "description": "Turkey, duck, other poultry",
  "id": "usda-fndds-2706147",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-cup-diced-cooked",
      "kind": "unit",
      "label": "1 cup, diced, cooked"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-dove-yield-after-cooking-bone-removed",
      "kind": "unit",
      "label": "1 dove (yield after cooking, bone removed)"
    }
  ],
  "name": "Dove, cooked, NS as to cooking method",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 0.0,
    "energy_kcal": 212.0,
    "fat_g": 13.0,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 5.88,
    "magnesium_mg": 26.0,
    "omega3_g": 0.064,
    "phosphorus_mg": 331.0,
    "potassium_mg": 255.0,
    "protein_g": 23.8,
    "salt_g": 0.5475,
    "sat_fat_g": 3.72,
    "sodium_mg": 219.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 2.9,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 4.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706147",
  "state": "Cooked",
  "subcategory": "Turkey, duck, other poultry",
  "tags": [
    "cooked",
    "meat-and-poultry",
    "turkey-duck-other-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
