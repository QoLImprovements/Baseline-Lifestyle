/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "lb",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-169902",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 453.0,
      "key": "lb",
      "kind": "unit",
      "label": "lb"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Quail, cooked, total edible",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 0.0,
    "energy_kcal": 951.0,
    "fat_g": 14.1,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 4.43,
    "magnesium_mg": 22.0,
    "omega3_g": 0.047,
    "phosphorus_mg": 279.0,
    "potassium_mg": 216.0,
    "protein_g": 25.1,
    "salt_g": 0.13,
    "sat_fat_g": 3.96,
    "sodium_mg": 52.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 70.0,
    "vitamin_c_mg": 2.3,
    "vitamin_e_mg": 0.7,
    "vitamin_k_ug": 4.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169902",
  "state": "Cooked",
  "subcategory": "Poultry Products",
  "tags": [
    "cooked",
    "meat-and-poultry",
    "poultry-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
