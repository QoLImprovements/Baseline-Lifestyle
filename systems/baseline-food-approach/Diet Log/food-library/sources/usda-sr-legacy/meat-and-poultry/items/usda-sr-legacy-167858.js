/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "ear-yield-after-cooking",
  "description": "Pork Products",
  "id": "usda-sr-legacy-167858",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 111.0,
      "key": "ear-yield-after-cooking",
      "kind": "unit",
      "label": "ear (yield after cooking)"
    },
    {
      "gramsPerUnit": 422.0,
      "key": "unit-cooked-yield-from-1-lb-raw-meat",
      "kind": "unit",
      "label": "unit, cooked (yield from 1 lb raw meat)"
    }
  ],
  "name": "Pork, fresh, variety meats and by-products, ears, frozen, cooked, simmered",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 0.2,
    "energy_kcal": 695.0,
    "fat_g": 10.8,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.5,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 24.0,
    "potassium_mg": 40.0,
    "protein_g": 16.0,
    "salt_g": 0.4175,
    "sat_fat_g": 3.86,
    "sodium_mg": 167.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167858",
  "state": "Frozen",
  "subcategory": "Pork Products",
  "tags": [
    "frozen",
    "meat-and-poultry",
    "pork-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
