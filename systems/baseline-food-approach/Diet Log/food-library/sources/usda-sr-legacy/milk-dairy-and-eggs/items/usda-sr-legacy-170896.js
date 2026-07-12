/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "package",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-170896",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 566.0,
      "key": "package",
      "kind": "unit",
      "label": "package"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    }
  ],
  "name": "Cheese spread, American or Cheddar cheese base, reduced fat",
  "nutritionPerBasis": {
    "calcium_mg": 557.0,
    "carbs_g": 10.7,
    "energy_kcal": 176.0,
    "fat_g": 8.88,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.36,
    "magnesium_mg": 27.0,
    "omega3_g": 0.049,
    "phosphorus_mg": 931.0,
    "potassium_mg": 250.0,
    "protein_g": 13.4,
    "salt_g": 2.75,
    "sat_fat_g": 5.65,
    "sodium_mg": 1100.0,
    "sugar_g": 7.06,
    "vitamin_a_ug": 185.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.46,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170896",
  "state": "Unspecified",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
