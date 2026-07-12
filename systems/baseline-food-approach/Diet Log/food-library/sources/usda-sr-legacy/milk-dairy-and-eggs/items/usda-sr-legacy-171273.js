/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "oz",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-171273",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "0-25-lb",
      "kind": "unit",
      "label": "0.25 lb"
    }
  ],
  "name": "Milk, dry, nonfat, calcium reduced",
  "nutritionPerBasis": {
    "calcium_mg": 280.0,
    "carbs_g": 51.8,
    "energy_kcal": 1480.0,
    "fat_g": 0.2,
    "fibre_g": 0.0,
    "folate_ug": 50.0,
    "iron_mg": 0.32,
    "magnesium_mg": 60.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 1010.0,
    "potassium_mg": 680.0,
    "protein_g": 35.5,
    "salt_g": 5.7,
    "sat_fat_g": 0.124,
    "sodium_mg": 2280.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 6.7,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171273",
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
