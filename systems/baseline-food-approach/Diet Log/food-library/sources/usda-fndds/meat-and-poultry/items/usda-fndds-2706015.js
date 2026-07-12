/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup-cooked-diced",
  "description": "Chicken, whole pieces",
  "id": "usda-fndds-2706015",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup-cooked-diced",
      "kind": "unit",
      "label": "1 cup, cooked, diced"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "1-medium-drumstick",
      "kind": "unit",
      "label": "1 medium drumstick"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-large-drumstick",
      "kind": "unit",
      "label": "1 large drumstick"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "1-drumstick-ns-as-to-size",
      "kind": "unit",
      "label": "1 drumstick, NS as to size"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-small-drumstick",
      "kind": "unit",
      "label": "1 small drumstick"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-cooked",
      "kind": "unit",
      "label": "1 oz, cooked"
    }
  ],
  "name": "Chicken drumstick, stewed, skin not eaten",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 0.0,
    "energy_kcal": 148.0,
    "fat_g": 5.9,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.93,
    "magnesium_mg": 22.0,
    "omega3_g": 0.017,
    "phosphorus_mg": 183.0,
    "potassium_mg": 237.0,
    "protein_g": 23.7,
    "salt_g": 1.0575,
    "sat_fat_g": 1.59,
    "sodium_mg": 423.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706015",
  "state": "Unspecified",
  "subcategory": "Chicken, whole pieces",
  "tags": [
    "chicken-whole-pieces",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
