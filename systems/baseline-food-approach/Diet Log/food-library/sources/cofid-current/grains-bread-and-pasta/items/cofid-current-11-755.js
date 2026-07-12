/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "8 samples, 5 products, including Honey Loops and own brands. Based on Honey Nut Cheerios and products containing nuts",
  "id": "cofid-current-11-755",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Breakfast cereal, honey loops and hoops, including Honey and Nut Cheerios, fortified",
  "nutritionPerBasis": {
    "calcium_mg": 265.0,
    "carbs_g": 78.7,
    "energy_kcal": 349.0,
    "fat_g": 3.1,
    "fibre_g": 4.3,
    "folate_ug": 170.0,
    "iron_mg": 9.4,
    "magnesium_mg": 54.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 240.0,
    "potassium_mg": 219.0,
    "protein_g": 6.6,
    "salt_g": 0.7,
    "sat_fat_g": 0.67,
    "sodium_mg": 280.0,
    "sugar_g": 34.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 67.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-755",
  "state": "Unspecified",
  "subcategory": "AI",
  "tags": [
    "ai",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
