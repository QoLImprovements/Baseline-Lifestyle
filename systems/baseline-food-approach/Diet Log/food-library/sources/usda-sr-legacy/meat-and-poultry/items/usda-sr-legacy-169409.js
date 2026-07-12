/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "cup",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-169409",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Nuts, coconut milk, frozen (liquid expressed from grated meat and water)",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 5.58,
    "energy_kcal": 845.0,
    "fat_g": 20.8,
    "fibre_g": 0.0,
    "folate_ug": 14.0,
    "iron_mg": 0.81,
    "magnesium_mg": 32.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 59.0,
    "potassium_mg": 232.0,
    "protein_g": 1.61,
    "salt_g": 0.03,
    "sat_fat_g": 18.4,
    "sodium_mg": 12.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169409",
  "state": "Frozen",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "frozen",
    "meat-and-poultry",
    "nut-and-seed-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
